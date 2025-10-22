// API service functions for items

export const fetchItemsAPI = async () => {
    console.log('Fetching items...');
    const response = await fetch('http://localhost:3056/users');
    if (!response.ok) throw new Error('Failed to fetch items');
    console.log('Fetched successfully:');
    return await response.json();
};

export const createItemAPI = async (itemData) => {
    console.log('Creating item with data:');
    const response = await fetch('http://localhost:3056/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(itemData),
    });
    if (!response.ok) throw new Error('Failed to create item');
    console.log('Created successfully:');
    return await response.json();
};

export const updateItemAPI = async (id, itemData) => {
    const response = await fetch(`http://localhost:3056/users/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(itemData),
    });
    if (!response.ok) throw new Error('Failed to update item');
    return await response.json();
};

export const deleteItemAPI = async (id) => {
    const response = await fetch(`http://localhost:3056/users/${id}`, {
        method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete item');
    return response;
};