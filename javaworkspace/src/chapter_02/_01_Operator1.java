package chapter_02;

public class _01_Operator1 {
    public static void main(String[] args) {
//        int val = 10;
//        System.out.println(++val); //11
//        System.out.println(val); //11
//
//        int val = 10;
//        System.out.println(val++); //10
//        System.out.println(val); //11
//        //  --val , val-- 도 됨


        // 삼항 연산자
        //결과 = (조건) ? (참의 경우 값) : (거짓의 경우 값)
        int x = 5;
        int y = 3;
        int max = (x > y) ? x : y;
        System.out.println(max);
    }
}
