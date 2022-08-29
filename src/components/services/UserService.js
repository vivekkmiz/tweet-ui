
class UserService {
    async getAllUsers() {
        const response = await fetch('/all');
        const body = await response.json();
        console.log(body);
        return body;
    }
}
export default new UserService();