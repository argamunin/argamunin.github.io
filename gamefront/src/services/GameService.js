import ApiService from './apiService';

class GameService {
  static async GetGames() {
    const url = '/games';
    const response = await ApiService.get(url);
    return response;
  }

  static async GetGameById(id) {
    const url = `/gamebyid?id=${id}`;
    const response = await ApiService.get(url);
    return response;
  }

  static async CreateGame(dataBody) {
    const url = '/creategame';
    const response = await ApiService.post(url, dataBody);
    return response;
  }

  static async DeleteGamebyId(id) {
    const url = `/deletegamebyid?id=${id}`;
    const response = await ApiService.delete(url);
    return response;
  }
}

export default GameService;
