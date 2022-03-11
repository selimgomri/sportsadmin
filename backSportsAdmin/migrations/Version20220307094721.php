<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220307094721 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE logo (id INT AUTO_INCREMENT NOT NULL, club_id INT DEFAULT NULL, path VARCHAR(255) DEFAULT NULL, INDEX IDX_E48E9A1361190A32 (club_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE logo ADD CONSTRAINT FK_E48E9A1361190A32 FOREIGN KEY (club_id) REFERENCES club (id)');
        $this->addSql('ALTER TABLE club DROP logo');
        $this->addSql('ALTER TABLE user DROP photo');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE logo');
        $this->addSql('ALTER TABLE club ADD logo VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE user ADD photo LONGTEXT DEFAULT NULL');
    }
}
