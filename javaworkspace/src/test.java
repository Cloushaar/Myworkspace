import java.util.Random;
import java.util.Scanner;
public class test {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Random rand = new Random();
        String [] haha = {"가위","바위","보"};

        System.out.println("가위바위보 게임을 시작합니다.");
        System.out.println("가위 바위 보를 입력하세요.");

        String userChoice = sc.next();
        int computerChoice = rand.nextInt(3), UserChoice=0;

        for (int i =0; i<=2; i++)
            if(haha[i].equals(userChoice))
                UserChoice = i;

        System.out.println("사용자: " + haha[UserChoice]);
        System.out.println("컴퓨터: " + haha[computerChoice]);

        if (UserChoice == computerChoice) {
            System.out.println("비겼습니다.");
        } else if (UserChoice == 1 && computerChoice == 2 || UserChoice == 2 && computerChoice == 3 || UserChoice == 3 && computerChoice == 1) {
            System.out.println("졌습니다.");
        } else {
            System.out.println("이겼습니다.");
        }
    }
}
