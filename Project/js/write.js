document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.querySelector("button[type='submit']");
    
    submitButton.addEventListener("click", function(event) {
        event.preventDefault();
        
        const title = document.getElementById("title").value;
        const content = document.getElementById("content").value;

        // 파일 업로드 함수 호출
        const fileInput = document.getElementById("file");
        const file = fileInput.files[0];

        if (!title || !content) {
            alert('제목과 내용을 입력하세요.');
            return;
        }
        
        uploadFile(file, function(err, fileUrl) {
            if (err) {
                alert('파일 업로드 실패');
                return;
            }

            const currentDate = new Date(); // 현재 시간 가져오기
            const formattedDate = currentDate.toLocaleString(); // 현재 시간을 날짜 형식으로 변환
            
            const post = {
                title: title,
                content: content,
                date: formattedDate, // 현재 날짜 형식으로 저장
                fileUrl: fileUrl // 업로드된 파일의 S3 URL
            };

            // 저장된 게시글 목록 불러오기
            let posts = JSON.parse(localStorage.getItem("posts")) || [];
            posts.push(post);
            
            localStorage.setItem("posts", JSON.stringify(posts));

            // 작성 완료 시 메시지 출력 또는 다른 작업 수행 가능
            alert("게시글이 작성되었습니다.");
            window.location.replace("comunity.html");
        });
    });
});
