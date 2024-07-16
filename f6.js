public class Customer {
    private String accountNumber;
    private double bankBalance;
    private String phoneNumber;
    
    public String name;
    public String address;

    public Customer(String accountNumber, double bankBalance, String phoneNumber, String name, String address) {
        this.accountNumber = accountNumber;
        this.bankBalance = bankBalance;
        this.phoneNumber = phoneNumber;
        this.name = name;
        this.address = address;
    }
}
