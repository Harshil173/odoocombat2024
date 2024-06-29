import makeRequest from './makeRequest';

const useAuthCheck = () => {

    const checkAuth = async () => {
        try {
            const response = await makeRequest('get', '/auth/user');
            if (response.status === 200) {
                return response.data.message;
            } else {
                return false;
            }
        } catch (error) {
            console.error('Error', error.response?.data?.message);
            return false;
        }
    };

    return checkAuth;
};

export default useAuthCheck;
