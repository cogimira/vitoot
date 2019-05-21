### git 最小配置

    git config --global user.name 'your name'
    git config --global user.email 'your email'

    git config --local  只对某个仓库有效
    git config --global  对当前所有仓库有效
    git config --system  基本不用

    git config --list --local
    git config --list --global
    git config --list --system

### 创建仓库

. 把已经有的项目纳入仓库管理

    cd your_project
    git init

.新建项目直接用git管理

    cd dir
    git init your_project  会创建同名的文件夹
    cd your_project


#### git 重命名

    git mv filename tagret_name

#### git log 查看版本历史

    git log --oneline 单行显示
    git log -n4  显示最近四条提交
    git log --graph
    gitk 打开图形化git
    git cat-file -t git查看文件类型
    git cat-file -p git查看文件内容

#### commit blob tree 三种类型的关系

#### 分离头指针  head 指向某一次提交

    git branch <new_branch_name> commit_hash 

#### 进一步理解head 和 branch

    1.git checkout -b <new_branch_name> <brach_base_name> 基于某一个分治创建新的分支
    2.head最终是会落脚到某一个commit的
    3.git diff HEAD HEAD^1 head 和父亲的比对

#### 删除不需要的分支

    1.git branch -d <branch_name>
    2.git branch -D <branch_name>  强制删除

#### 修改commit 的 message

    git commit --amend  直接做变更
    git rebase -i commit_hash_id   