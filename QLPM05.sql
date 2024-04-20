CREATE DATABASE QLPM
-------TABLES--------
CREATE TABLE LOGIN(
	IDLogin int NOT NULL,
	Username nvarchar(20),
	Password nvarchar(20),
	CreatedAt smalldatetime,
	UpdateAt smalldatetime
)

CREATE TABLE ROOM(
	IDRoom nvarchar(5)NOT NULL,
	IDAssignment int NOT NULL,
	RoomName nvarchar(10),
	Location nvarchar(10),
	Subject nvarchar(50),
	DeviceQuantity int
)

CREATE TABLE ASSIGNMENT(
	IDAssignment int NOT NULL,
	IDLogin int NOT NULL,
	Lecturers nvarchar(50),
	Subject nvarchar(50),
	DMY smalldatetime,
	ShiftTime varchar(50)
)

CREATE TABLE DEVICE(
	IDDevice nvarchar(10)NOT NULL,
	IDRoom nvarchar(5)NOT NULL,
	PCCODE nvarchar(10),
	NumberOfComputerComponents varchar(190),
	QuantityOfSoftware int,
	Status nvarchar(20),
	Note nvarchar(50),
	CreatedAt smalldatetime,
	UpdateAt smalldatetime
)

CREATE TABLE DEVICEComponent(
	IDDEVICEComponent nvarchar(10) NOT NULL,
	IDDevice nvarchar(10)NOT NULL,
	PCCODE nvarchar(10),
	DEVICEComponentName nvarchar(20),
	Status nvarchar(20),
	Note nvarchar(50),
	CreatedAt smalldatetime,
	UpdateAt smalldatetime
)
-------NHAP DU LIEU-------
INSERT INTO LOGIN
VALUES	('12', 'quy','quy123','2023/10/02','2023/10/02'),
		('34', 'tu','tu123','2023/10/02','2023/10/02'),
		('56', 'hao','hao123','2023/10/02','2023/10/02')


INSERT INTO ASSIGNMENT
VALUES	('1','12',N'Trần Văn Tuấn',N'HTML,CSS','2023/10/02','7:00-11:30'),
		('2','34',N'Đỗ Thị Hoa',N'javascript,Reactjs','2023/10/02','13:30-17:00'),
		('3','56',N'Lê Trần Minh Nhật',N'Lập trình Android,C#','2023/10/02','7:00-9:00')
		

INSERT INTO ROOM
VALUES	('PC01', '1','PH1',N'Lầu 1',N'HTML,CSS','5'),
		('PC02', '2','PH2',N'Lầu 2',N'javascript,Reactjs','5'),
		('PC03', '3','PH3',N'Lầu 3',N'Lập trình Android,C#','5')
		
INSERT INTO	DEVICE
VALUES ('TB1TH1','PC01','PCA1','1 PCcase, 1 Monitor, 1 Mouse, 1 PSU, 1 Motherboard, 1 SSD, 1 CPU, 2 Ram, 1 CPU Cooler',10,'Undamaged','Nothing bad','2023/10/02','2023/10/02'),
		('TB2TH1','PC01','PCA2','1 PCcase, 1 Monitor, 1 Mouse, 1 PSU, 1 Motherboard, 1 SSD, 1 CPU, 2 Ram, 1 CPU Cooler',10,'Undamaged','Nothing bad','2023/10/02','2023/10/02'),
		('TB3TH1','PC01','PCA3','1 PCcase, 1 Monitor, 1 Mouse, 1 PSU, 1 Motherboard, 1 SSD, 1 CPU, 2 Ram, 1 CPU Cooler',10,'Undamaged','Nothing bad','2023/10/02','2023/10/02')

INSERT INTO DEVICEComponent	
VALUES ('M1PCA1','TB1TH1','PCA1','Monitor','Undamaged','Nothing bad','2023/10/03','2023/10/03'),
		('CASE1PCA1','TB1TH1','PCA1','PCcase','Undamaged','Nothing bad','2023/10/03','2023/10/03'),
		('MO1PCA1','TB1TH1','PCA1','Mouse','Undamaged','Nothing bad','2023/10/03','2023/10/03'),
		('PSU1PCA1','TB1TH1','PCA1','PSU','Undamaged','Nothing bad','2023/10/03','2023/10/03'),
		('MOT1PCA1','TB1TH1','PCA1','Motherboard','Undamaged','Nothing bad','2023/10/03','2023/10/03'),
		('SSD1PCA1','TB1TH1','PCA1','SSD','Undamaged','Nothing bad','2023/10/03','2023/10/03'),
		('R1PCA1','TB1TH1','PCA1','Ram 1','Undamaged','Nothing bad','2023/10/03','2023/10/03'),
		('R2PCA1','TB1TH1','PCA1','Ram 2','Undamaged','Nothing bad','2023/10/03','2023/10/03'),
		('CPU1PCA1','TB1TH1','PCA1','CPU','Undamaged','Nothing bad','2023/10/03','2023/10/03'),
		('COP1PCA1','TB1TH1','PCA1','CPU Cooler','Undamaged','Nothing bad','2023/10/03','2023/10/03')


------KEYS-----
---1.KHOA CHINH---
ALTER TABLE LOGIN ADD CONSTRAINT PK_LOGIN_IDLogin PRIMARY KEY (IDLogin)
ALTER TABLE ASSIGNMENT ADD CONSTRAINT PK_ASSIGNMENT_IDAssignment PRIMARY KEY (IDAssignment)
ALTER TABLE ROOM ADD CONSTRAINT PK_ROOM_IDRoom PRIMARY KEY (IDRoom)
ALTER TABLE DEVICE ADD CONSTRAINT PK_DEVICE_IDDevice PRIMARY KEY (IDDevice)
ALTER TABLE DEVICEComponent ADD CONSTRAINT PK_DEVICEComponent_IDDEVICEComponent PRIMARY KEY (IDDEVICEComponent)
----2.KHOA NGOAI---
ALTER TABLE ASSIGNMENT ADD CONSTRAINT FK_ASSIGNMENT_LOGIN_IDLogin_IDLogin FOREIGN KEY(IDLogin)
REFERENCES LOGIN(IDLogin)
ALTER TABLE ROOM ADD CONSTRAINT FK_ROOM_ASSIGNMENT__IDAssignment_IDAssignment FOREIGN KEY(IDAssignment)
REFERENCES ASSIGNMENT(IDAssignment)
ALTER TABLE DEVICE ADD CONSTRAINT FK_DEVICE_ROOM_IDRoom_IDRoom FOREIGN KEY(IDRoom)
REFERENCES ROOM(IDRoom)
ALTER TABLE DEVICEComponent ADD CONSTRAINT FK_DEVICEComponent_DEVICE__IDDevice FOREIGN KEY(IDDevice)
REFERENCES DEVICE(IDDevice)
