import { environment } from "src/environment/environment";

export class CommandURL {

    //user
    public static LOGIN_USER = environment.PROCESS_SERVICE + "/api/v1/user/login";
    public static CREATE_USER = environment.PROCESS_SERVICE + "/api/v1/user/createUser";
    public static UPDATE_USER = environment.PROCESS_SERVICE + "/api/v1/user/update";
    public static GET_USER = environment.PROCESS_SERVICE + "/api/v1/user/getAll";
    public static CHANGE_STATUS = environment.PROCESS_SERVICE + "/api/v1/user/getAllStatus";

    //gioi tinh
    public static GET_GENDER_DATA = environment.PROCESS_SERVICE + "/api/v1/user/getAllGender";
    public static GET_ROLE_DATA = environment.PROCESS_SERVICE + "/api/v1/user/getAllRole";  
    //check in
 
    public static CHECKOUT = environment.PROCESS_SERVICE + "/api/v1/user/checkout";  

    public static GET_ALL_CHECKIN = environment.PROCESS_SERVICE + "/api/v1/user/getAllCheckin";  
    // deparment
    public static GET_DEPARTMENT = environment.PROCESS_SERVICE + "/api/v1/department/getAll";  
    public static CREATE_DEPARTMENT = environment.PROCESS_SERVICE + "/api/v1/department/create"; 

}