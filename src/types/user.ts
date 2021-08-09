export default interface User {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
};

export interface AuthContextProps {
    currentUser: User | null;
    loadingUser: boolean;
}