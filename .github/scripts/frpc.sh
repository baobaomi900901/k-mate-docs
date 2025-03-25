#!/bin/bash

# 获取系统架构并匹配FRP命名
arch=$(uname -m)
case $arch in
  x86_64) frp_arch="amd64" ;;
  aarch64) frp_arch="arm64" ;;
  *) echo "Unsupported architecture: $arch"; exit 1 ;;
esac

# FRP下载配置
frp_version="0.61.2"
frp_url="https://github.com/fatedier/frp/releases/download/v${frp_version}/frp_${frp_version}_linux_${frp_arch}.tar.gz"
frp_dir="./tmp/frp"

# 创建临时目录
mkdir -p "$frp_dir"

# 下载并解压FRP
echo "Downloading FRP from $frp_url"
wget -q -O "./tmp/frp.tar.gz" "$frp_url"
tar -xzf "./tmp/frp.tar.gz" -C "$frp_dir" --strip-components=1

# 写入配置文件（从GitHub Secrets获取）
echo "Writing frpc.toml configuration"
cat > "$frp_dir/frpc.toml" << EOF
$FRP_CONFIG
EOF

# 设置执行权限并启动frpc
chmod +x "$frp_dir/frpc"
echo "Starting frpc..."
"$frp_dir/frpc" -c "$frp_dir/frpc.toml" &
sleep 3

# 验证进程是否运行
if ! pgrep -x "frpc" > /dev/null; then
  echo "Failed to start frpc!"
  exit 1
fi
echo "Frpc started successfully"