FROM ubuntu:20.04

# 自動インストールが止まるのを防ぐため入力待ちでブロックされないようにする
ENV DEBIAN_FRONTEND=noninteractive

# セットアップ
# 最小構成は下記
# https://code.visualstudio.com/docs/remote/containers-advanced#_reducing-dockerfile-build-warnings
RUN apt-get update \
  && apt-get -y install --no-install-recommends apt-utils dialog 2>&1 \
  #
  # node.js
  && apt-get -y install curl nodejs npm \
  && npm -g install n \
  && n stable \
  && apt-get -y purge nodejs npm \
  #
  # git
  && apt-get -y install software-properties-common \
  && add-apt-repository ppa:git-core/ppa \
  && apt-get update \
  && apt-get -y install git

# ダイアログモードに戻す
ENV DEBIAN_FRONTEND=dialog
