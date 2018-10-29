
■ JSON Web Token (JWT) 은 웹표준 (RFC 7519) 으로서 두 개체에서 JSON 객체를 사용하여 가볍고 자가수용적인 (self-contained) 방식으로 정보를 안전성 있게 전달해 주는 것 (2015년 5월)
■ C, Java, Python, C++, R, C#, PHP, JavaScript, Ruby, Go, Swift 등 대부분의 주류 프로그래밍 언어에서 지원 (수많은 회사의 인프라스트럭쳐에서 사용 되고 있습니다 (Facebook, LinkedIn, Instagram, GitHub, Google 등)
■  필요한 모든 정보를 자체적으로 지니고 있습니다. JWT 시스템에서 발급된 토큰은, 토큰에 대한 기본정보, 전달 할 정보 그리고 토큰이 검증됐다는것을 증명해주는 signature 를 포함
■ JWT 는 자가수용적이므로, 두 개체 사이에서 손쉽게 전달 될 수 있습니다. 웹서버의 경우 HTTP의 헤더에 넣어서 전달 할 수도 있고, URL 의 파라미터로 전달 할 수도 있음


■ 수많은 프로그래밍 언어에서 지원

■ 자가 수용적 (self-contained)

■ 쉽게 전달 가능


토큰만 다룬다. 도메인 사용자를 그대로 사용하고, 도메인 사용자와 토큰간의 맵핑 테이블을 이용한다(주로 속도가 빠른 키-값 저장소 이용).
 네트워크 구간에서 변조가 불가능하다. 변조되면 토큰은 무효화된다. 
 네트워크 구간에서 탈취 당해도 유효 기간(ttl) 또는 리프레시 가능 기간(refresh_ttl)이 지나면 무효화된다.
 토큰 안에 사용자를 식별하기 위한 정보를 담고 있다. 즉, 토큰만 해독하면 사용자를 식별할 수 있다.
 캡티브 API, 소형 API 서비스에 어울린다
 생성했다는 사실을 증명할 수 있다.(서명)
 JSON타입으로 변수 정보를 저장할 수 있다.
 서버에서 쿼리하지 않아도 사용자를 로컬에서 검증할 수 있기 때문에 API 호출의 횟수를 줄일 수 있다.



■ 회원 인증 : 서버측에서는 유저의 세션을 유지 할 필요가 없습니다. 즉 유저가 로그인되어있는지 안되어있는지 신경 쓸 필요가 없고, 유저가 요청을 했을때 토큰만 확인하면 되니, 세션 관리가 필요 없어서 서버 자원을 많이 아낄 수 있습니다.

■ 정보 교류: JWT는 두 개체 사이에서 안정성있게 정보를 교환하기에 좋은 방법입니다. 그 이유는, 정보가 sign 이 되어있기 때문에 정보를 보낸이가 바뀌진 않았는지, 또 정보가 도중에 조작되지는 않았는지 검증할 수 있습니다.


					
				
Header 는 두가지의 정보를 지니고 있습니다.
typ: 토큰의 타입을 지정합니다. 바로 JWT 이죠.
alg: 해싱 알고리즘을 지정합니다.  해싱 알고리즘으로는 보통 HMAC SHA256 혹은 RSA 가 사용되며, 이 알고리즘은, 토큰을 검증 할 때 사용되는 signature 부분에서 사용됩니다.




Payload 부분에는 토큰에 담을 정보가 들어있습니다. 여기에 담는 정보의 한 ‘조각’ 을 클레임(claim) 이라고 부르고, 이는 name / value 의 한 쌍으로 이뤄져있습니다. 토큰에는 여러개의 클레임 들을 넣을 수 있습니다.
클레임 의 종류는 다음과 같이 크게 세 분류로 나뉘어져있습니다:
등록된 (registered) 클레임,
공개 (public) 클레임,
비공개 (private) 클레임

		
모든 값이 필수 값은 아니지만 기본값이 정해져있다. 선택적으로 이용하면 된다.

 iss: 토큰 발급자 (issuer)
 sub: 토큰 제목 (subject)
 aud: 토큰 대상자 (audience)
 exp: 토큰의 만료시간 (expiraton), 시간은 NumericDate 형식으로 되어있어야 하며 (예: 1480849147370) 언제나 현재 시간보다 이후로 설정되어있어야합니다.
 nbf: Not Before 를 의미하며, 토큰의 활성 날짜와 비슷한 개념입니다. 여기에도 NumericDate 형식으로 날짜를 지정하며, 이 날짜가 지나기 전까지는 토큰이 처리되지 않습니다.
 iat: 토큰이 발급된 시간 (issued at), 이 값을 사용하여 토큰의 age 가 얼마나 되었는지 판단 할 수 있습니다.
 jti: JWT의 고유 식별자로서, 주로 중복적인 처리를 방지하기 위하여 사용됩니다. 일회용 토큰에 사용하면 유용합니다.


공개 클레임들은 소유권을 주장을 정의하기 위해 사용하는 name space 부분의 제어 이름 입니다.
충돌이 방지된 (collision-resistant) 이름을 가지고 있어야 합니다. 충돌을 방지하기 위해서는, 클레임 이름을 URI 형식으로 짓습니다.
{
    "https://velopert.com/jwt_claims/is_admin": true
}
등록된 클레임도아니고, 공개된 클레임들도 아닙니다. 양 측간에 (보통 클라이언트 <->서버) 협의하에 사용되는 클레임 이름들입니다. 공개 클레임과는 달리 이름이 중복되어 충돌이 될 수 있으니 사용할때에 유의해야합니다.
보통 라이브러리를 사용하면 비공개 클레임만 작성하면 된다.
{
    "username": "velopert"
}


{
    "iss": "velopert.com",
    "exp": "1485270000000",
    "https://velopert.com/jwt_claims/is_admin": true,
    "userId": "11028373727102",
    "username": "velopert"
}
위 예제 payload 는 2개의 등록된 클레임, 1개의 공개 클레임, 2개의 비공개 클레임으로 이뤄져있습니다.




JSON Web Token 의 마지막 부분은 바로 서명(signature) 입니다. 이 서명은 헤더의 인코딩값과, 정보의 인코딩값을 합친후 주어진 비밀키로 해쉬를 하여 생성합니다.
서명 부분을 만드는 슈도코드(pseudocode)의 구조는 다음과 같습니다.
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  secret)


Bearer token이라고 하는 보안 token 관련 HTTP 인증 체계
Bearer token이란?
	대개 로그인 요청에 대한 응답으로 서버에서 생성되는 암호문
Bearer 인증 방식은 원래 RFC 6750 에서 OAuth 2.0의 일부로 작성 되었지만 때로는 자체적으로도 사용 
Basic 인증 과 마찬가지로 Bearer 인증은 HTTPS (SSL)를 통해서만 사용해야합니다.



베어러 토큰은 일반적으로 서버에 의해 생성 bearerFormat되므로 클라이언트에 대한 힌트로 문서 목적으로 주로 사용됩니다
bearerAuth : []의 대괄호 []는 API 호출에 필요한 보안 범위 목록을 포함합니다. 범위는 OAuth 2 및 OpenID Connect 에서만 사용되므로 목록은 비어 있습니다. 
위의 예에서 Bearer 인증은 전체 API에 전역 적으로 적용됩니다. 
베어러 인증은 여러 인증 유형 사용 에서 설명한대로 다른 인증 방법과 결합 할 수도 있습니다 .
적절한 베어러 토큰을 포함하지 않는 요청에 대해 반환 된 401 "Unauthorized"응답을 정의 할 수 있습니다. 