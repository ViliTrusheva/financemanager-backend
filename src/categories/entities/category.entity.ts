import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Entry } from '../../entries/entities/entry.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  migration1: string;

  @OneToMany(() => Entry, (entry) => entry.category)
  entries: Entry[];
}
