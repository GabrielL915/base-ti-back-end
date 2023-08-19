import { ApiProperty } from "@nestjs/swagger";
export class CreateUserDto {
    //@ApiProperty()
    id: string;
    @ApiProperty({
        description: 'Nome do usuário',
        example: 'João da Silva',
        type: String,
    })
    nome: string;
    @ApiProperty({
        description: 'Email do usuário',
        example: 'exemplo@gmail.com',
        type: String,
    })
    cpf: string;
    @ApiProperty({
        description: 'Senha do usuário',
        example: '123456',
        type: String,
    })
    telefone: number;
}
