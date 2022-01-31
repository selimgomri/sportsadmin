<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220128114039 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE club (id INT AUTO_INCREMENT NOT NULL, sport_id_id INT NOT NULL, name VARCHAR(255) NOT NULL, logo VARCHAR(255) DEFAULT NULL, address VARCHAR(255) NOT NULL, primarycolor VARCHAR(255) NOT NULL, secondarycolor VARCHAR(255) NOT NULL, INDEX IDX_B8EE3872CB38FF4E (sport_id_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE club_member (id INT AUTO_INCREMENT NOT NULL, club_id_id INT DEFAULT NULL, member_id_id INT DEFAULT NULL, INDEX IDX_552B46F2DF2AB4E5 (club_id_id), INDEX IDX_552B46F21D650BA4 (member_id_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE document (id INT AUTO_INCREMENT NOT NULL, member_id_id INT DEFAULT NULL, type VARCHAR(255) NOT NULL, name VARCHAR(255) NOT NULL, created_at DATETIME DEFAULT NULL, updated_at DATETIME DEFAULT NULL, INDEX IDX_D8698A761D650BA4 (member_id_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE field (id INT AUTO_INCREMENT NOT NULL, club_id_id INT DEFAULT NULL, label VARCHAR(255) NOT NULL, type VARCHAR(255) NOT NULL, choice JSON DEFAULT NULL, required TINYINT(1) NOT NULL, position INT NOT NULL, INDEX IDX_5BF54558DF2AB4E5 (club_id_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE guardian (id INT AUTO_INCREMENT NOT NULL, lastname VARCHAR(255) NOT NULL, firstname VARCHAR(255) NOT NULL, address VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, phone INT NOT NULL, created_at DATETIME DEFAULT NULL, updated_at DATETIME DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE invoice (id INT AUTO_INCREMENT NOT NULL, member_id_id INT DEFAULT NULL, club_id_id INT DEFAULT NULL, date DATE NOT NULL, price_paid DOUBLE PRECISION NOT NULL, INDEX IDX_906517441D650BA4 (member_id_id), INDEX IDX_90651744DF2AB4E5 (club_id_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE member (id INT AUTO_INCREMENT NOT NULL, parent_id_id INT DEFAULT NULL, subscription_id_id INT DEFAULT NULL, lastname VARCHAR(255) NOT NULL, firstname VARCHAR(255) NOT NULL, birthdate DATE NOT NULL, address VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, phone INT NOT NULL, gender VARCHAR(255) DEFAULT NULL, license_number VARCHAR(255) DEFAULT NULL, password VARCHAR(255) NOT NULL, role LONGTEXT NOT NULL COMMENT \'(DC2Type:array)\', INDEX IDX_70E4FA78B3750AF4 (parent_id_id), INDEX IDX_70E4FA78857C9F24 (subscription_id_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE member_field (id INT AUTO_INCREMENT NOT NULL, member_id_id INT DEFAULT NULL, field_id_id INT DEFAULT NULL, value VARCHAR(255) NOT NULL, created_at DATETIME DEFAULT NULL, updated_at DATETIME DEFAULT NULL, INDEX IDX_39D4D0AB1D650BA4 (member_id_id), INDEX IDX_39D4D0AB54E308AC (field_id_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE sport (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, created_at DATETIME DEFAULT NULL, updated_at DATETIME DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE subscription (id INT AUTO_INCREMENT NOT NULL, susbscription_formula_id_id INT DEFAULT NULL, type VARCHAR(255) NOT NULL, amount DOUBLE PRECISION DEFAULT NULL, start_date DATE DEFAULT NULL, end_date DATE DEFAULT NULL, INDEX IDX_A3C664D351C00599 (susbscription_formula_id_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE subscription_formula (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, amount DOUBLE PRECISION NOT NULL, created_at DATETIME DEFAULT NULL, updated_at DATETIME DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE club ADD CONSTRAINT FK_B8EE3872CB38FF4E FOREIGN KEY (sport_id_id) REFERENCES sport (id)');
        $this->addSql('ALTER TABLE club_member ADD CONSTRAINT FK_552B46F2DF2AB4E5 FOREIGN KEY (club_id_id) REFERENCES club (id)');
        $this->addSql('ALTER TABLE club_member ADD CONSTRAINT FK_552B46F21D650BA4 FOREIGN KEY (member_id_id) REFERENCES member (id)');
        $this->addSql('ALTER TABLE document ADD CONSTRAINT FK_D8698A761D650BA4 FOREIGN KEY (member_id_id) REFERENCES member (id)');
        $this->addSql('ALTER TABLE field ADD CONSTRAINT FK_5BF54558DF2AB4E5 FOREIGN KEY (club_id_id) REFERENCES club (id)');
        $this->addSql('ALTER TABLE invoice ADD CONSTRAINT FK_906517441D650BA4 FOREIGN KEY (member_id_id) REFERENCES member (id)');
        $this->addSql('ALTER TABLE invoice ADD CONSTRAINT FK_90651744DF2AB4E5 FOREIGN KEY (club_id_id) REFERENCES club (id)');
        $this->addSql('ALTER TABLE member ADD CONSTRAINT FK_70E4FA78B3750AF4 FOREIGN KEY (parent_id_id) REFERENCES guardian (id)');
        $this->addSql('ALTER TABLE member ADD CONSTRAINT FK_70E4FA78857C9F24 FOREIGN KEY (subscription_id_id) REFERENCES subscription (id)');
        $this->addSql('ALTER TABLE member_field ADD CONSTRAINT FK_39D4D0AB1D650BA4 FOREIGN KEY (member_id_id) REFERENCES member (id)');
        $this->addSql('ALTER TABLE member_field ADD CONSTRAINT FK_39D4D0AB54E308AC FOREIGN KEY (field_id_id) REFERENCES field (id)');
        $this->addSql('ALTER TABLE subscription ADD CONSTRAINT FK_A3C664D351C00599 FOREIGN KEY (susbscription_formula_id_id) REFERENCES subscription_formula (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE club_member DROP FOREIGN KEY FK_552B46F2DF2AB4E5');
        $this->addSql('ALTER TABLE field DROP FOREIGN KEY FK_5BF54558DF2AB4E5');
        $this->addSql('ALTER TABLE invoice DROP FOREIGN KEY FK_90651744DF2AB4E5');
        $this->addSql('ALTER TABLE member_field DROP FOREIGN KEY FK_39D4D0AB54E308AC');
        $this->addSql('ALTER TABLE member DROP FOREIGN KEY FK_70E4FA78B3750AF4');
        $this->addSql('ALTER TABLE club_member DROP FOREIGN KEY FK_552B46F21D650BA4');
        $this->addSql('ALTER TABLE document DROP FOREIGN KEY FK_D8698A761D650BA4');
        $this->addSql('ALTER TABLE invoice DROP FOREIGN KEY FK_906517441D650BA4');
        $this->addSql('ALTER TABLE member_field DROP FOREIGN KEY FK_39D4D0AB1D650BA4');
        $this->addSql('ALTER TABLE club DROP FOREIGN KEY FK_B8EE3872CB38FF4E');
        $this->addSql('ALTER TABLE member DROP FOREIGN KEY FK_70E4FA78857C9F24');
        $this->addSql('ALTER TABLE subscription DROP FOREIGN KEY FK_A3C664D351C00599');
        $this->addSql('DROP TABLE club');
        $this->addSql('DROP TABLE club_member');
        $this->addSql('DROP TABLE document');
        $this->addSql('DROP TABLE field');
        $this->addSql('DROP TABLE guardian');
        $this->addSql('DROP TABLE invoice');
        $this->addSql('DROP TABLE member');
        $this->addSql('DROP TABLE member_field');
        $this->addSql('DROP TABLE sport');
        $this->addSql('DROP TABLE subscription');
        $this->addSql('DROP TABLE subscription_formula');
    }
}
