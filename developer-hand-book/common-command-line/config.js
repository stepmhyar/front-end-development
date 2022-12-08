// commandLine 中使用双引号 ""
const config = [
  {
    item: 'Linux',
    content: [
      {
        explain: 'Change Server(Nginx)',
        commandLine: [`server {
          listen        80;
          server_name   weiliang.tank.360.c;n
          root          /home/weiliang/devspace/tank/dist;
        
          location ~* .(js|css|html)$ {
              expires off;
          }
        }`],
        isTextarea: true
      },
      {
        explain: 'Change Server(Nginx)',
        commandLine: [`server {
          listen        80;
          server_name   weiliang.tank.360.c;n
          root          /home/weiliang/devspace/tank/dist;
        
          location ~* .(js|css|html)$ {
              expires off;
          }
        }`],
        isTextarea: true
      },
      {
        explain: 'Change Server(Nginx)',
        commandLine: [`server {
          listen        80;
          server_name   weiliang.tank.360.c;n
          root          /home/weiliang/devspace/tank/dist;
        
          location ~* .(js|css|html)$ {
              expires off;
          }
        }`],
        isTextarea: true
      },
      {
        explain: 'Change Server(Nginx)',
        commandLine: [`server {
          listen        80;
          server_name   weiliang.tank.360.c;n
          root          /home/weiliang/devspace/tank/dist;
        
          location ~* .(js|css|html)$ {
              expires off;
          }
        }`],
        isTextarea: true
      }
    ]
  },
  {
    item: 'Mac 命令',
    content: [
      {
        explain: '修改自定义命令',
        commandLine: ['vi ~/.bash_profile', 'source ~/.bashrc'],
      },
      {
        explain: '删除当前目录 DS_Store',
        commandLine: ['find ./ -name ".DS_Store" -depth -exec rm {} \;'],
      },
    ]
  },
  {
    item: 'PS',
    content: [
      {
        explain: 'Adobe 破解删除注册文件',
        commandLine: ['sudo rm /Library/Application\ Support/Adobe/AdobeGCClient/AdobeGCClient.app/Contents/MacOS/AdobeGCClient'],
      }
    ]
  },
]