
# NestJs
## 특징 
* 컨트롤러, 프로바이더, 모듈을 사용한 어플리케이션 아키텍처 제공
1. Node.js 서버 사이드 프레임워크
2. typescript 지원
3. 자바스크립트 최신 스펙 사용, 바닐라 스크립트 사용시 babel 사용 필수
4. HTTP 요청 부분은 추상화된 코드를 제공해 익스프레스와 패스트파이(fastify)를 사용 할 수 있음

### Naming Convention
* 파일명은 . 으로 연결, 모듈이 둘 이상의 단어로 구성되어 있다면 - 로 연결
```
<모듈명>.<컨트롤러명>.ts
product.controller.ts
product-item.controller.ts
```

* 클래스명 - Camel Case
```
<모듈명><컨트롤러명>
ProductController
```
* 같은 디렉터리에 있는 클래스는 index.ts를 통해서 임포트하는 것을 권장
```
import { CartController } from './controller/cart.controller'
import { OrderController } from './controller/order.controller'
=> 
import { CartController, OrderController } from './controller'
```