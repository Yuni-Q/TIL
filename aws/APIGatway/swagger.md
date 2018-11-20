
# Swagger

## Swagger로 API Gateway 확장
API Gateway 확장에서는 AWS 관련 인증 및 API Gateway 관련 API 통합을 지원합니다.  
앱에서 API Gateway 확장을 사용하는 방법을 이해하기 위해 API Gateway 콘솔을 사용하여 API를 생성하여 Swagger 정의 파일로 내보낼 수 있습니다.  
API를 내보내는 방법에 대한 자세한 내용은 [API 내보내기 단원](https://docs.aws.amazon.com/ko_kr/apigateway/latest/developerguide/api-gateway-export-api.html)을 참조하십시오.  

### API Gateway에서 API 내보내기
API Gateway 콘솔을 사용하거나 달리 API Gateway에서 API를 생성 및 구성한 경우, Amazon API Gateway Control Service의 일부인 API Gateway API 내보내기를 사용하여 이를 Swagger 파일로 내보낼 수 있습니다.  
Postman 확장뿐만 아니라 API 게이트웨이 통합 확장도 내보낸 Swagger 정의 파일에 포함시킬 수 있습니다.  
페이로드가 application/json 유형이 아닐 경우 API를 내보낼 수 없습니다. 내보내기를 시도하면 JSON 본문 모델이 없다는 오류 응답을 받게 됩니다.  

#### API 내보내기 요청
내보내기 API를 사용하여 GET 요청을 제출하고 내보낼 API를 URL 경로의 일부로 지정하여 기존 API를 내보내십시오. 요청 URL의 형식은 다음과 같습니다.  
> https://<host>/restapis/<restapi_id>/stages/<stage_name>/exports/swagger  
> API Gateway 확장(integration 값 사용) 또는 Postman 확장을 포함할지(postman 값 사용) 지정하는 extensions 쿼리 문자열을 추가할 수 있습니다.  

(https://docs.aws.amazon.com/ko_kr/apigateway/latest/developerguide/api-gateway-create-api-from-example-console.html)