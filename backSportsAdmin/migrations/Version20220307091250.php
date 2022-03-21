<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220307091250 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE club CHANGE secondarycolor secondarycolor VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE user DROP photo, CHANGE roles roles LONGTEXT NOT NULL COMMENT \'(DC2Type:json)\', CHANGE password password VARCHAR(255) NOT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE club CHANGE secondarycolor secondarycolor VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE user ADD photo VARCHAR(255) DEFAULT NULL, CHANGE roles roles LONGTEXT DEFAULT NULL COMMENT \'(DC2Type:json)\', CHANGE password password VARCHAR(255) DEFAULT NULL');
    }
}