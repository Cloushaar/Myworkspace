package chapter_02;

public class _Quiz_02 {
    public static void main(String[] args) {
        int x,y,z, max,min;
        x = 11;
        y = 20;
        z = 18;

        max = (x>y) ? (x>z) ? x : z : (y>z) ? y : z ;
        System.out.println(max);

        min = (x<y) ? (x<z) ? x : z : (y<z) ? y : z ;
        System.out.println(min);
        System.out.println();
    }
}
