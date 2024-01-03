export const API_SERVER = "http://localhost:5001/api/users";
export const BASENAME = "";
export const DEFAULT_PATH = "/dashboard/default";

export const FONT_FAMILY = `'Roboto', sans-serif`;

export const registerUser = async (user) => {
    const response = await fetch(`${API_SERVER}}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
    })

    if (response.status === 201) {
        return response.json();
    } else {
        throw new Error('Failed to create user');
    }    
}