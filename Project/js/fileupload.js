// AWS SDK 초기 설정 (필요한 경우)
AWS.config.update({
    accessKeyId: '*',
    secretAccessKey: '*',
    region: 'us-east-1' // AWS 리전 설정
});

// S3 클라이언트 생성
const s3 = new AWS.S3();

// 파일 업로드 함수
function uploadFile(file, callback) {
    const bucketName = 'nullwebuserfile'; // AWS S3 버킷 이름
    const folderName = 'userfolder/'; // 업로드할 파일이 저장될 폴더 이름
    const fileName = `${Date.now()}_${file.name}`; // 파일 이름을 고유하게 설정

    const params = {
        Bucket: bucketName,
        Key: folderName + fileName,
        Body: file
    };

    // 파일 업로드
    s3.upload(params, (err, data) => {
        if (err) {
            console.error('파일 업로드 실패:', err);
            callback(err, null);
        } else {
            console.log('파일 업로드 성공:', data);
            callback(null, data.Location); // 파일 업로드 성공 시 S3 URL 반환
        }
    });
}
