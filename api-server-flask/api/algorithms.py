from math import floor
import numpy as np


#Esta funcion lo que hace es devolver el array y los indices donde se encuentra cada elemento de array
#ejemplo: [1,2,1,2] output: [1,2,1,2] [[0,2],[1,3],[0,2],[1,3]]

def group_by(arr, *funcs, transform=False, equal_nan=True)->'tuple':
    """
    https://stackoverflow.com/a/77150915
    Groups by the K unique values of arr and applies some functions to each group.
    Each function is called K times with the indices of the group as input.
    If no functions are provided, returns the K unique values and the indices of each group.
    By default, the results are of length K, not len(arr) (like pandas "apply").
    Use transform=True to remap them to the input length (like pandas "transform").
    If a function returns tuples, it must return the same shape across groups
    because the outputs are casted to numpy arrays. Casting is deactivated for lists.
    """
    _, invs, cnts = np.unique(arr, return_counts=True, return_inverse=True, axis=0)
    funcs = funcs or [lambda idx: arr[idx[0]], lambda idx: list(idx)]
    idxs = np.split(np.argsort(invs), np.cumsum(cnts)[:-1])
    funcs_out = ()
    for f in funcs:
        out = [f(idx) for idx in idxs]
        if transform:
            out = [out[invs[i]] for i in range(len(arr))]
        if not out or not isinstance(out[0], list):
            out = np.array(out)
        funcs_out += (out,)
    return funcs_out

def parse_x_weights(x, weights=None):
    x = np.asarray(x)
    if weights is None:
        x, weights = np.unique(x, return_counts=True)
    else:
        _weights = np.asarray(weights)
        # merge repeated values if they exist
        x, weights = group_by(x, lambda idx: x[idx[0]], lambda idx: _weights[idx].sum())
    weights = weights / weights.sum()
    return x, weights
    


def metric_var( weights=None):
    x= [0, 0.25, 0.5, 0.75, 1]
    x, weights = parse_x_weights(x, weights)
    mu = np.average(x, weights=weights)
    return 4 * np.average((x - mu) ** 2, weights=weights)


def metric_squared( weights=None):
    x= [0, 0.25, 0.5, 0.75, 1]
    x, weights = parse_x_weights(x, weights)
    return 4 * np.average((x - 0.5) ** 2, weights=weights)


def metric_abs(weights=None):
    x= [0, 0.25, 0.5, 0.75, 1]
    x, weights = parse_x_weights(x, weights)
    return 2 * np.average(np.abs(x - 0.5), weights=weights)

def metric_mean( weights=None):
    x = [0, 0.25, 0.5, 0.75, 1]
    x, weights = parse_x_weights(x, weights)
    mu = np.average(x, weights=weights)
    return mu

def metric_median( weights=None):
    x= [0, 0.25, 0.5, 0.75, 1]
    x, weights = parse_x_weights(x, weights)
    flat_x = {}
    k = 0
    n = len(x)
    for i in range(len(x)):
     m = int(100 * weights[i])
     for j in range(m):
       flat_x[k] = x[i]
       k = k + 1
    return np.median(list(flat_x.values()))

"""
    This function calculates the polarization of a given distribution of bins ER
"""

def ER(alpha, weights):
    x= [0, 0.25, 0.5, 0.75, 1]
    x = np.asarray(x)
    weights = np.ones_like(x) if weights is None else np.asarray(weights)

    out = np.sum(weights ** (1 + alpha) * weights[:, None] * np.abs(x[:, None] - x))
    out /= 2*((np.sum(weights)/2) ** (2 + alpha))
    print(weights)
    return out
    

"""
    This function calculates the polarization of a given distribution of bins Frank
"""
def metric_comete( alpha, beta, weights):
        x = [0, 0.25, 0.5, 0.75, 1]
        x, weights = parse_x_weights(x, weights)
        weights = weights**alpha
        weights = weights / weights.sum()

        def f(y: float):
            return np.average(np.abs(x - y) ** beta, weights=weights)

        low = np.min(x)
        high = np.max(x)
        precision = 1e-12
        tests_per_iter = 10
        while high - low > precision:
            lin = np.linspace(low, high, tests_per_iter)
            f_lin = [f(y) for y in lin]
            # import matplotlib.pyplot as plt;plt.stem(x, weights);plt.plot(lin, f_lin);plt.show()
            i: int = np.argmin(f_lin)
            low = lin[max(0, i - 2)]
            high = lin[min(len(lin) - 1, i + 2)]
        y_star = (low + high) / 2
        #
        return 2*(f(y_star) ** (1 / beta))

" Experts measure"
def metric_experts(weights):

    b2 = 1.07
    b3 = 1.35
    b4 = 1.98
    f2b = weights[1]* weights[3]
    f3 = (weights[0] * weights[ 3] + weights[1] * weights[4])
    f4 = weights[0] * weights[4]
    total_pairs = sum(weights)
    P = round(2 * (b2 * f2b + b3 * f3 + b4 * f4) * 100 / (99 * total_pairs ** 2), 3)
    return P