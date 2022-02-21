<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220221104115 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE club (id INT AUTO_INCREMENT NOT NULL, sport_id INT DEFAULT NULL, name VARCHAR(255) NOT NULL, logo VARCHAR(255) DEFAULT NULL, address VARCHAR(255) DEFAULT NULL, primarycolor VARCHAR(255) NOT NULL, secondarycolor VARCHAR(255) NOT NULL, INDEX IDX_B8EE3872AC78BCF8 (sport_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE club_user (id INT AUTO_INCREMENT NOT NULL, club_id INT DEFAULT NULL, user_id INT DEFAULT NULL, INDEX IDX_E95B1CA961190A32 (club_id), INDEX IDX_E95B1CA9A76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE document (id INT AUTO_INCREMENT NOT NULL, user_id INT DEFAULT NULL, type VARCHAR(255) NOT NULL, name VARCHAR(255) NOT NULL, INDEX IDX_D8698A76A76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE field (id INT AUTO_INCREMENT NOT NULL, club_id INT DEFAULT NULL, label VARCHAR(255) NOT NULL, type VARCHAR(255) NOT NULL, choice LONGTEXT DEFAULT NULL COMMENT \'(DC2Type:json)\', required TINYINT(1) NOT NULL, position INT DEFAULT NULL, INDEX IDX_5BF5455861190A32 (club_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE guardian (id INT AUTO_INCREMENT NOT NULL, lastname VARCHAR(255) NOT NULL, firstname VARCHAR(255) NOT NULL, address VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, phone VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE invoice (id INT AUTO_INCREMENT NOT NULL, user_id INT DEFAULT NULL, club_id INT DEFAULT NULL, date DATE NOT NULL, price_paid INT NOT NULL, INDEX IDX_90651744A76ED395 (user_id), INDEX IDX_9065174461190A32 (club_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE sport (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE subscription (id INT AUTO_INCREMENT NOT NULL, subscription_formula_id INT DEFAULT NULL, type VARCHAR(255) NOT NULL, amount INT DEFAULT NULL, start_date DATE NOT NULL, end_date DATE NOT NULL, INDEX IDX_A3C664D367EF23E3 (subscription_formula_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE subscription_formula (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, amount INT DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, guardian_id INT DEFAULT NULL, subscription_id INT DEFAULT NULL, email VARCHAR(180) NOT NULL, roles LONGTEXT NOT NULL COMMENT \'(DC2Type:json)\', password VARCHAR(255) NOT NULL, lastname VARCHAR(255) NOT NULL, firstname VARCHAR(255) NOT NULL, birthdate DATE NOT NULL, address VARCHAR(255) DEFAULT NULL, phone VARCHAR(255) DEFAULT NULL, license_number INT DEFAULT NULL, category VARCHAR(255) DEFAULT NULL, photo VARCHAR(255) DEFAULT NULL, sexe VARCHAR(255) NOT NULL, UNIQUE INDEX UNIQ_8D93D649E7927C74 (email), INDEX IDX_8D93D64911CC8B0A (guardian_id), INDEX IDX_8D93D6499A1887DC (subscription_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user_field (id INT AUTO_INCREMENT NOT NULL, user_id INT DEFAULT NULL, field_id INT DEFAULT NULL, value VARCHAR(255) NOT NULL, INDEX IDX_B937BE00A76ED395 (user_id), INDEX IDX_B937BE00443707B0 (field_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE club ADD CONSTRAINT FK_B8EE3872AC78BCF8 FOREIGN KEY (sport_id) REFERENCES sport (id)');
        $this->addSql('ALTER TABLE club_user ADD CONSTRAINT FK_E95B1CA961190A32 FOREIGN KEY (club_id) REFERENCES club (id)');
        $this->addSql('ALTER TABLE club_user ADD CONSTRAINT FK_E95B1CA9A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE document ADD CONSTRAINT FK_D8698A76A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE field ADD CONSTRAINT FK_5BF5455861190A32 FOREIGN KEY (club_id) REFERENCES club (id)');
        $this->addSql('ALTER TABLE invoice ADD CONSTRAINT FK_90651744A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE invoice ADD CONSTRAINT FK_9065174461190A32 FOREIGN KEY (club_id) REFERENCES club (id)');
        $this->addSql('ALTER TABLE subscription ADD CONSTRAINT FK_A3C664D367EF23E3 FOREIGN KEY (subscription_formula_id) REFERENCES subscription_formula (id)');
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D64911CC8B0A FOREIGN KEY (guardian_id) REFERENCES guardian (id)');
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D6499A1887DC FOREIGN KEY (subscription_id) REFERENCES subscription (id)');
        $this->addSql('ALTER TABLE user_field ADD CONSTRAINT FK_B937BE00A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE user_field ADD CONSTRAINT FK_B937BE00443707B0 FOREIGN KEY (field_id) REFERENCES field (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE club_user DROP FOREIGN KEY FK_E95B1CA961190A32');
        $this->addSql('ALTER TABLE field DROP FOREIGN KEY FK_5BF5455861190A32');
        $this->addSql('ALTER TABLE invoice DROP FOREIGN KEY FK_9065174461190A32');
        $this->addSql('ALTER TABLE user_field DROP FOREIGN KEY FK_B937BE00443707B0');
        $this->addSql('ALTER TABLE user DROP FOREIGN KEY FK_8D93D64911CC8B0A');
        $this->addSql('ALTER TABLE club DROP FOREIGN KEY FK_B8EE3872AC78BCF8');
        $this->addSql('ALTER TABLE user DROP FOREIGN KEY FK_8D93D6499A1887DC');
        $this->addSql('ALTER TABLE subscription DROP FOREIGN KEY FK_A3C664D367EF23E3');
        $this->addSql('ALTER TABLE club_user DROP FOREIGN KEY FK_E95B1CA9A76ED395');
        $this->addSql('ALTER TABLE document DROP FOREIGN KEY FK_D8698A76A76ED395');
        $this->addSql('ALTER TABLE invoice DROP FOREIGN KEY FK_90651744A76ED395');
        $this->addSql('ALTER TABLE user_field DROP FOREIGN KEY FK_B937BE00A76ED395');
        $this->addSql('DROP TABLE club');
        $this->addSql('DROP TABLE club_user');
        $this->addSql('DROP TABLE document');
        $this->addSql('DROP TABLE field');
        $this->addSql('DROP TABLE guardian');
        $this->addSql('DROP TABLE invoice');
        $this->addSql('DROP TABLE sport');
        $this->addSql('DROP TABLE subscription');
        $this->addSql('DROP TABLE subscription_formula');
        $this->addSql('DROP TABLE user');
        $this->addSql('DROP TABLE user_field');
    }
}
