package chapter_01;

public class _03_Variables {
    public static void main(String[] args) {
        String name = "냐옹이";
        int hour = 15;

        System.out.println(name + "님, 배송이 시작됩니다. " + hour + "시에 방문 예정입니다.");
        System.out.println(name + "님, 배송이 완료되었습니다.");

        double score = 90.5;
        char grade = 'A';
        name = "곰돌이";
        System.out.println(name + "님의 평균점수는 " + score + "점입니다");
        System.out.println("학점은 " + grade + "입니다");

        boolean pass = true;
        System.out.println("이번 시험에 합격했을까요?" + pass);

        double d = 3.1415926535;
        float f = 3.1415926535F;
        System.out.println(d);
        System.out.println(f);

        long l = 100000000000000000l;
        l = 100_000_000_000_000_000l;
        System.out.println(l);
    }
}
