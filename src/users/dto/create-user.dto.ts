import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsInt, IsNotEmpty, IsOptional, IsString, MinLength, Matches, IsLowercase } from 'class-validator';

export class CreateUserDto {
    @ApiProperty({ description: 'El correo electrónico del usuario', example: 'usuario@ejemplo.com' })
    @IsEmail({}, { message: 'El correo electrónico no es válido' })
    @IsNotEmpty({ message: 'El correo electrónico es obligatorio' })
    @IsLowercase({ message: 'El correo electrónico debe estar en minúsculas' })
    email: string;

    @ApiProperty({ description: 'El nombre del usuario', required: false, example: 'Juan Pérez' })
    @IsString({ message: 'El nombre debe ser una cadena de texto' })
    @IsOptional()
    @MinLength(2, { message: 'El nombre debe tener al menos 2 caracteres' })
    name?: string;

    @ApiProperty({ description: 'La contraseña del usuario (mín. 8 caracteres, 1 mayúscula, 1 número)', minLength: 8 })
    @IsString({ message: 'La contraseña debe ser una cadena de texto' })
    @IsNotEmpty({ message: 'La contraseña es obligatoria' })
    @MinLength(8, { message: 'La contraseña debe tener al menos 8 caracteres' })
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'La contraseña es demasiado débil (debe incluir mayúsculas y números)',
    })
    password: string;

    @ApiProperty({ description: 'El ID del rol del usuario', example: 1 })
    @IsInt({ message: 'El roleId debe ser un número entero' })
    @IsNotEmpty({ message: 'El roleId es obligatorio' })
    roleId: number;
}


