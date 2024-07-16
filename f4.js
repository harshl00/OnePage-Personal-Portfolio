import java.util.Random;

public class GreetingMessages {
    public static void main(String[] args) {
        String[] defaultMessages = {
            "Happy Birthday! Have a fantastic day!",
            "Wishing you a wonderful birthday celebration!",
            "May your birthday be filled with joy and happiness!",
            "Sending you warm wishes on your special day!",
            "Happy Birthday! Make it unforgettable!"
        };
        
        String customerMessage = null; // Simulating no customer message
        
        String selectedMessage = customerMessage != null ? customerMessage : defaultMessages[new Random().nextInt(defaultMessages.length)];
        
        System.out.println("Selected Message: " + selectedMessage);
    }
}
