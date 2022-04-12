import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Mensaje {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nick: string;

    @Column()
    mensaje: string;

}
