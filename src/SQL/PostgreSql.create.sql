




CREATE TABLE Рекомендац (
 primaryKey UUID NOT NULL,
 Специалисты VARCHAR(255) NULL,
 Руководители VARCHAR(255) NULL,
 Рабочие VARCHAR(255) NULL,
 ПричинУвольн UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Анкеты (
 primaryKey UUID NOT NULL,
 Коммент VARCHAR(255) NULL,
 СистемОбучен INT NULL,
 ВзаимCКоллег INT NULL,
 Престиж INT NULL,
 ВозрастСотруд VARCHAR(17) NULL,
 ОрганРабочПроц INT NULL,
 ИнтенсРаботы INT NULL,
 СистемПремир INT NULL,
 ИнформСотруд INT NULL,
 СнабжНеобхИнстр INT NULL,
 ВзаимСРуковод INT NULL,
 ОфицПризЗасл INT NULL,
 РезультРабот INT NULL,
 СанитГигиен INT NULL,
 СистемАдаптац INT NULL,
 ОценивРабот INT NULL,
 ДатаЗаполн TIMESTAMP(3) NULL,
 РазмЗарабПлат INT NULL,
 СодержРабот INT NULL,
 КакойСтаж VARCHAR(19) NULL,
 КарьерРоста INT NULL,
 СистемЛьгот INT NULL,
 ОтносКатСотр VARCHAR(12) NULL,
 Специалист UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ПричинУвольн (
 primaryKey UUID NOT NULL,
 ДатаЗаполн TIMESTAMP(3) NULL,
 ПричУвольн VARCHAR(255) NULL,
 Специалист UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Специалист (
 primaryKey UUID NOT NULL,
 Номер INT NULL,
 ЭлектрПочта VARCHAR(255) NULL,
 Телефон VARCHAR(255) NULL,
 ФИО VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMNETLOCKDATA (
 LockKey VARCHAR(300) NOT NULL,
 UserName VARCHAR(300) NOT NULL,
 LockDate TIMESTAMP(3) NULL,
 PRIMARY KEY (LockKey));


CREATE TABLE STORMSETTINGS (
 primaryKey UUID NOT NULL,
 Module VARCHAR(1000) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 "User" VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMAdvLimit (
 primaryKey UUID NOT NULL,
 "User" VARCHAR(255) NULL,
 Published BOOLEAN NULL,
 Module VARCHAR(255) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 HotKeyData INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERSETTING (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMWEBSEARCH (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 "Order" INT NOT NULL,
 PresentView VARCHAR(255) NOT NULL,
 DetailedView VARCHAR(255) NOT NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERDETAIL (
 primaryKey UUID NOT NULL,
 Caption VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 ConnectMasterProp VARCHAR(255) NOT NULL,
 OwnerConnectProp VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERLOOKUP (
 primaryKey UUID NOT NULL,
 DataObjectType VARCHAR(255) NOT NULL,
 Container VARCHAR(255) NULL,
 ContainerTag VARCHAR(255) NULL,
 FieldsToView VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE UserSetting (
 primaryKey UUID NOT NULL,
 AppName VARCHAR(256) NULL,
 UserName VARCHAR(512) NULL,
 UserGuid UUID NULL,
 ModuleName VARCHAR(1024) NULL,
 ModuleGuid UUID NULL,
 SettName VARCHAR(256) NULL,
 SettGuid UUID NULL,
 SettLastAccessTime TIMESTAMP(3) NULL,
 StrVal VARCHAR(256) NULL,
 TxtVal TEXT NULL,
 IntVal INT NULL,
 BoolVal BOOLEAN NULL,
 GuidVal UUID NULL,
 DecimalVal DECIMAL(20,10) NULL,
 DateTimeVal TIMESTAMP(3) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ApplicationLog (
 primaryKey UUID NOT NULL,
 Category VARCHAR(64) NULL,
 EventId INT NULL,
 Priority INT NULL,
 Severity VARCHAR(32) NULL,
 Title VARCHAR(256) NULL,
 Timestamp TIMESTAMP(3) NULL,
 MachineName VARCHAR(32) NULL,
 AppDomainName VARCHAR(512) NULL,
 ProcessId VARCHAR(256) NULL,
 ProcessName VARCHAR(512) NULL,
 ThreadName VARCHAR(512) NULL,
 Win32ThreadId VARCHAR(128) NULL,
 Message VARCHAR(2500) NULL,
 FormattedMessage TEXT NULL,
 PRIMARY KEY (primaryKey));



 ALTER TABLE Рекомендац ADD CONSTRAINT FK3e4d91c94555cbdca40d69d98dbef48e5824fc2b FOREIGN KEY (ПричинУвольн) REFERENCES ПричинУвольн; 
CREATE INDEX Index3e4d91c94555cbdca40d69d98dbef48e5824fc2b on Рекомендац (ПричинУвольн); 

 ALTER TABLE Анкеты ADD CONSTRAINT FKebc5f67e5e76565aafdfe0ac73eb678e90c185cc FOREIGN KEY (Специалист) REFERENCES Специалист; 
CREATE INDEX Indexebc5f67e5e76565aafdfe0ac73eb678e90c185cc on Анкеты (Специалист); 

 ALTER TABLE ПричинУвольн ADD CONSTRAINT FKdbf4c2308dcafcad2f7a280147e2e3519197636b FOREIGN KEY (Специалист) REFERENCES Специалист; 
CREATE INDEX Indexdbf4c2308dcafcad2f7a280147e2e3519197636b on ПричинУвольн (Специалист); 

 ALTER TABLE STORMWEBSEARCH ADD CONSTRAINT FKc4378e39870eb056aec84088683297a01d2a6200 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERDETAIL ADD CONSTRAINT FK921d16269835017e2a0d0e29ad6fb175454a70d0 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERLOOKUP ADD CONSTRAINT FKce38ef0db3f01a53acaa49fed8853fb941ad47ba FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

