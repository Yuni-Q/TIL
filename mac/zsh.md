# ZSH

## zsh version 확인
```bash
zsh --version
```
> zsh 5.5.1 (x86_64-apple-darwin17.5.0)

## zsh이 없다면 설치
```bash
brew update
brew install zsh
```

## bash를 zsh로 변경
```bash
chsh -s `which zsh`     #위 두 개의 명령을 하나로 줄일 수도 있다.
```
> 문제가 있다면 chsh -s /bin/zsh로 시도해 보자<br>
> 10.10 버전부터 무언가 바뀐 듯 하다.

## 재로그인하거나 터미널을 종료하고 재시작한 후 기본 쉘이 zsh인 것을 확인한다. 
> 일부 시스템 특히 OS X에서는 /etc/shells 파일에 설치한 쉘을 등록한 후에 재시작해야 한다.
```bash
echo $SHELL
```
> /usr/bin/zsh

## Oh-My-Zsh 설치
```bash
curl -L https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh | sh
```

## iterm2 설치
```bash
brew cask install iterm2
```

## 테마 변경
```bash
vi ~./zshrc
```
```vim
ZSH_THEME="refined" # 현재 사용 중인 테마
```
## zsh-syntax-highlighting ( 명령어에 색 입히기)
```bash
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git
echo "source ${(q-)PWD}/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh" >> ${ZDOTDIR:-$HOME}/.zshrc
```

### iterm2 단축키
새로운 탭 : command + t<br>
탭 이동 : command + 숫자<br>
화면 세로 분할 : command + d<br>
화면 가로 분할 : command + shift + d<br>
화면 포커스 이동 : command + [ 또는 command + ]<br>
현재 포커스 찾기 : command + /<br>
현재 화면 종료 : command + w<br>