# HTTP Tunneling

HTTP 기반 터널링을 할 수 있는 서버 및 클라이언트를 제작한다. 이는 다음과 같이 동작할 것이다.

## Client

- Client는 CLI 툴로, 서버 주소 및 포워딩할 포트를 입력으로 받는다.
- 클라이언트는 초기에 서버에 접속하여 서버로부터 적절한 도메인을 할당받는다.
- 서버 - 클라이언트 간에는 항상 TCP 연결을 유지한다.

## Server

서버는 두 개의 포트를 개방한다. 하나는 API와 접속을 위한 포트, 다른 하나는 TCP 커넥션을 위한 포트다.

## Usage

curl https://raw.githubusercontent.com/unknownpgr/http-tunnelling/master/client.min.js | node - example.com

or

docker run -it --rm unknownpgr/tunnelling:latest example.com
