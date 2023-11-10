package chapter_01;

public class _07_TypeCasting {
    public static void main(String[] args) {
        int score = 93;
        System.out.println(score);
        System.out.println((float) score);
        System.out.println((double) score);

        float score_f = 93.8f;
        double score_d = 97.7;
        System.out.println((int) score_f);
        System.out.println((int) score_d);

        String s1 = String.valueOf(93);
        s1 = Integer.toString(88);
        System.out.println(s1);
        String s2 = Double.toString(99.2);

        int i = Integer.parseInt("93.2");
        double d = Double.parseDouble("98.88");
    }
}
