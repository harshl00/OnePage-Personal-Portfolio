public class EssayCorrection {
    public static void main(String[] args) {
        // Original essay with a spelling mistake and in lowercase
        String essay = "annimal is a creature that lives in the wild. it can be found in various habitats such as forests, deserts, and oceans.";

        // Correct the spelling mistake
        essay = essay.replaceAll("annimal", "animal");

        // Convert essay to uppercase
        essay = essay.toUpperCase();

        // Print the corrected essay
        System.out.println(essay);
    }
}
