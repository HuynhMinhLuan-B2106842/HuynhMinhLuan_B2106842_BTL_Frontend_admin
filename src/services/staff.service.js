import api from "./api.service";

class staffService{
  async loginstaff(staff) {
    const response = await api.post(`/staff/loginStaff`, staff);
    return response.data;
  }
}

export default new staffService();