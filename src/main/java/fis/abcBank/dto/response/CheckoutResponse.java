package fis.abcBank.dto.response;

import fis.abcBank.dto.request.UserRequest;

import java.sql.Time;
import java.sql.Timestamp;
import java.time.LocalTime;
import java.util.Date;

public class CheckoutResponse extends UserRequest {
    private int id;
    private LocalTime checkoutTime;
    private Date checkinDate;
    private LocalTime checkinTime;
    private Timestamp workingTime;

    public Timestamp getWorkingTime() {
        return workingTime;
    }

    public void setWorkingTime(Timestamp workingTime) {
        this.workingTime = workingTime;
    }


    public Date getCheckinDate() {
        return checkinDate;
    }

    public void setCheckinDate(Date checkinDate) {
        this.checkinDate = checkinDate;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public LocalTime getCheckoutTime() {
        return checkoutTime;
    }

    public void setCheckoutTime(LocalTime checkoutTime) {
        this.checkoutTime = checkoutTime;
    }

    public LocalTime getCheckinTime() {
        return checkinTime;
    }

    public void setCheckinTime(LocalTime checkinTime) {
        this.checkinTime = checkinTime;
    }
}
