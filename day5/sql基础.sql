-- 通过*查询表中的所有数据
-- SELECT * FROM my_db_1.users;


-- 把users表中username和password对应的值查询出来
-- select username,password from my_db_1.users;

-- 使用insertinto 语句插入一条用户信息 username为tony password为123654
-- insert into my_db_1.users (username,password) values ('tony','123654');
-- select * from my_db_1.users;

-- 将id为4的用户的密码更新为888888
-- update my_db_1.users set password='888888' where id=4;
-- select * from my_db_1.users;

-- 更新id为2的用户 密码为admin123 status为1
-- update my_db_1.users set password='admin123',status=1 where id=2;

-- 删除id为4的用户的信息
-- delete from my_db_1.users where id=4;
-- select * from my_db_1.users;

-- 演示where子句的使用 
-- select * from my_db_1.users where id=1;
-- select * from my_db_1.users where id>=2;
-- select * from my_db_1.users where username<>'zs';
-- select * from my_db_1.users where username!='zs';

-- 使用and进行查询
-- select * from my_db_1.users where id<3 and status=1;

-- 使用or进行查询
-- select * from my_db_1.users where status=1 or username='zs';

-- orderby子句从上往下升序排列 默认为asc升序 若设置desc则为降序
-- select * from my_db_1.users order by status asc;
-- select * from my_db_1.users order by id desc;


-- 先对status降序排序 再对id升序排序 多重排序
-- select * from my_db_1.users order by status desc,id asc;
-- 先对status降序排序 再对username首字母升序排序
-- select * from my_db_1.users order by status desc,username asc;

-- 使用count(*) 统计出users表中status为0的数据总条数
-- select count(*) from my_db_1.users where status=0;

-- 使用as关键字为列设置别名
-- select count(*) as total from my_db_1.users where status=0;
-- select username as name,password as pwd from users;