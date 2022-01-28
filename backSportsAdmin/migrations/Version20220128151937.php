<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220128151937 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, guardian_id_id INT DEFAULT NULL, subscription_id_id INT DEFAULT NULL, email VARCHAR(180) NOT NULL, roles JSON NOT NULL, password VARCHAR(255) NOT NULL, lastname VARCHAR(255) NOT NULL, firstname VARCHAR(255) NOT NULL, birthdate DATE NOT NULL, phone VARCHAR(30) NOT NULL, license_number VARCHAR(255) DEFAULT NULL, UNIQUE INDEX UNIQ_8D93D649E7927C74 (email), INDEX IDX_8D93D64921738FEC (guardian_id_id), INDEX IDX_8D93D649857C9F24 (subscription_id_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D64921738FEC FOREIGN KEY (guardian_id_id) REFERENCES guardian (id)');
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D649857C9F24 FOREIGN KEY (subscription_id_id) REFERENCES subscription (id)');
        $this->addSql('ALTER TABLE club_member ADD user_id_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE club_member ADD CONSTRAINT FK_552B46F29D86650F FOREIGN KEY (user_id_id) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_552B46F29D86650F ON club_member (user_id_id)');
        $this->addSql('ALTER TABLE document ADD user_id_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE document ADD CONSTRAINT FK_D8698A769D86650F FOREIGN KEY (user_id_id) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_D8698A769D86650F ON document (user_id_id)');
        $this->addSql('ALTER TABLE invoice ADD user_id_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE invoice ADD CONSTRAINT FK_906517449D86650F FOREIGN KEY (user_id_id) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_906517449D86650F ON invoice (user_id_id)');
        $this->addSql('ALTER TABLE member_field ADD user_id_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE member_field ADD CONSTRAINT FK_39D4D0AB9D86650F FOREIGN KEY (user_id_id) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_39D4D0AB9D86650F ON member_field (user_id_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE club_member DROP FOREIGN KEY FK_552B46F29D86650F');
        $this->addSql('ALTER TABLE document DROP FOREIGN KEY FK_D8698A769D86650F');
        $this->addSql('ALTER TABLE invoice DROP FOREIGN KEY FK_906517449D86650F');
        $this->addSql('ALTER TABLE member_field DROP FOREIGN KEY FK_39D4D0AB9D86650F');
        $this->addSql('DROP TABLE user');
        $this->addSql('DROP INDEX IDX_552B46F29D86650F ON club_member');
        $this->addSql('ALTER TABLE club_member DROP user_id_id');
        $this->addSql('DROP INDEX IDX_D8698A769D86650F ON document');
        $this->addSql('ALTER TABLE document DROP user_id_id');
        $this->addSql('DROP INDEX IDX_906517449D86650F ON invoice');
        $this->addSql('ALTER TABLE invoice DROP user_id_id');
        $this->addSql('DROP INDEX IDX_39D4D0AB9D86650F ON member_field');
        $this->addSql('ALTER TABLE member_field DROP user_id_id');
    }
}
