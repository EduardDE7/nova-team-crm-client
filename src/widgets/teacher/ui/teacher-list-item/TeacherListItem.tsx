import type { TTeacherListItem } from '../../types'
import cl from './index.module.scss'
import { Button, Typography } from '@/shared'

const { Text } = Typography

export const TeacherListItem = ({
    image,
    firstName,
    lastName,
    email,
    gender,
    age,
    birthday,
    position
}: TTeacherListItem) => {
    return (
        <li className={cl.root}>
            <div className={cl.root__main}>
                <img
                    className={cl.root__main__image}
                    src={image}
                    alt={firstName + ' ' + lastName}
                />
                <div className={cl.root__main__body}>
                    <Text
                        text={firstName + ' ' + lastName}
                        noTranslate
                        className={cl.root__main__body__title}
                    />
                    <Text
                        text={email}
                        noTranslate
                        className={cl.root__main__body__text}
                    />
                </div>
            </div>
            <div className={cl.root__gender}>
                <Text
                    text="gender"
                    className={cl.root__title}
                />
                <Text
                    text={gender}
                    noTranslate
                    className={cl.root__text}
                />
            </div>
            <div className={cl.root__birthday}>
                <Text
                    text="birthday"
                    className={cl.root__title}
                />
                <Text
                    text={birthday}
                    noTranslate
                    className={cl.root__text}
                />
            </div>
            <div className={cl.root__age}>
                <Text
                    text="full_age"
                    className={cl.root__title}
                />
                <Text
                    text={age}
                    noTranslate
                    className={cl.root__text}
                />
            </div>
            <div className={cl.root__position}>
                <Text
                    text="position"
                    className={cl.root__title}
                />
                <div className={cl.root__position__body}>
                    <Text
                        text={position}
                        noTranslate
                        className={cl.root__text}
                    />
                    <Text
                        text="teacher"
                        className={cl.root__position__body__stamp}
                    />
                </div>
            </div>
            <Button
                iconName="More"
                link="#"
                variant="icon-secondary"
            />
        </li>
    )
}
