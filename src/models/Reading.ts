import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Reading extends Model {
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        primaryKey: true
    })
    id!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    readingType!: string;

    @Column({
        type: DataType.FLOAT,
        allowNull: false
    })
    value!: number;

    @Column({
        type: DataType.DATE,
        allowNull: false,
        defaultValue: DataType.NOW
    })
    date!: Date;

    @Column({
        type: DataType.STRING,
        allowNull: true
    })
    public imageUrl?: string;
}
