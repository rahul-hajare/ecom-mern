import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'User1 Demo1',
        email: 'user1@example.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: true
    },
    {
        name: 'User12 Demo2',
        email: 'user2@example.com',
        password: bcrypt.hashSync('123456',10)
    },
    {
        name: 'User3 Demo3',
        email: 'user3@example.com',
        password: bcrypt.hashSync('123456',10)
    }
]

export default users