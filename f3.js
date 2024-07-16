import java.util.*;

public class FruitCollection {
    public static void main(String[] args) {
        try {
            List<String> basket1 = new ArrayList<>();
            List<String> basket2 = new ArrayList<>();

            for (int i = 1; i <= 10; i++) {
                if (i % 2 == 0) {
                    basket1.add("Fruit" + i);
                } else {
                    basket2.add("Fruit" + i);
                }
            }

            List<String> combinedBasket = new ArrayList<>(basket1);
            combinedBasket.addAll(basket2);

            System.out.println("Combined Basket: " + combinedBasket);

        } catch (Exception e) {
            System.out.println("Exception occurred: " + e.getMessage());
        }
    }
}
