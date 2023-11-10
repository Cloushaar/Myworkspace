public class CicleArea_Exam {
    protected double area(int r){
        return 3.14 * r * r;
    }
    protected double round(int r){
        return 2 * 3.14 * r;
    }
}
class CicleMainTest extends CicleArea_Exam{
    public static void main(String[] args) {
        CicleArea_Exam cp = new CicleArea_Exam();
        System.out.println("원의 면적은" + cp.area(10));
        System.out.println("원의 둘래는" + cp.round(10));
    }
}
