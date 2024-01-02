package fis.abcBank.dto.base;

public class BaseResponse {
    private Object data;
    private String errorCode = null;
    private String errorDesc = null;
    private Integer totalRecords = null;

    public BaseResponse() {
        this.data = null;
        this.errorDesc = null;
        this.errorCode = null;
    }

    public BaseResponse(Object data) {
        this.data = data;
    }

    public BaseResponse(String errorCode, String errorDesc) {
        this.errorCode = errorCode;
        this.errorDesc = errorDesc;
    }

    public BaseResponse(Object data, String errorCode, String errorDesc) {
        this.data = data;
        this.errorCode = errorCode;
        this.errorDesc = errorDesc;
    }

    public BaseResponse(Object data, String errorCode, String errorDesc, Integer totalRecords) {
        this.data = data;
        this.errorCode = errorCode;
        this.errorDesc = errorDesc;
        this.totalRecords = totalRecords;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }

    public String getErrorCode() {
        return errorCode;
    }

    public void setErrorCode(String errorCode) {
        this.errorCode = errorCode;
    }

    public String getErrorDesc() {
        return errorDesc;
    }

    public void setErrorDesc(String errorDesc) {
        this.errorDesc = errorDesc;
    }

    public Integer getTotalRecords() {
        return totalRecords;
    }

    public void setTotalRecords(Integer totalRecords) {
        this.totalRecords = totalRecords;
    }
}
