# 查询数据库
show databases ;
# 使用数据库
use school;
# 插入操作
insert into student (`stu_num`,`name`,`age`,`class`) values (1,"liqiang",18,1);
insert into student (`stu_num`,`name`,`age`,`class`) values (2,"renmingxin","18",1);
insert into student (`stu_num`,`name`,`age`,`class`) values (3,"yangiqng","19",2);
insert into student (`stu_num`,`name`,`age`,`class`) values (4,"李涛","19",3);
insert into student (`stu_num`,`name`,`age`,`class`) values (5,"test","19",3);
# 更新操作
update student set name = "litao",class = 1 where  id = 5;
update student set age = 18,class = 3 where  name = "liqiang";
# 查询操作
select * from student;
select name,age from student;
# 查询总数
select count(1) from student;
# 查询总数(带条件)
select count(1) from student where age = 19 or class = 2;
# 查询字段相加总和（年龄）
select sum(age) from student;
# 查询平均年龄
select sum(age)/count(1) from student;
# api写法,查询平均年龄
select avg(age) as avg_age from student;
# 每个班级有多少人,每个班的平均年龄（分组）
select class, count(1) as class_count,avg(age) as avg_age from student group by class;
# 分页(偏移，偏移后的条数)
select * from student limit 1,2;
# 排序
select * from student order by age desc ;
# 删除
delete from student where id = 6;

select * from student where class = 1 and age = 19;
