<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220211113251 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE user_field (id INT AUTO_INCREMENT NOT NULL, user_id INT DEFAULT NULL, field_id INT DEFAULT NULL, value VARCHAR(255) NOT NULL, INDEX IDX_B937BE00A76ED395 (user_id), INDEX IDX_B937BE00443707B0 (field_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE user_field ADD CONSTRAINT FK_B937BE00A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE user_field ADD CONSTRAINT FK_B937BE00443707B0 FOREIGN KEY (field_id) REFERENCES field (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE user_field');
    }
}
