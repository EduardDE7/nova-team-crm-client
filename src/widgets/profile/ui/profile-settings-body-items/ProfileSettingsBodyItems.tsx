import { Checkbox, Typography } from '@/shared'

import { ProfileSettingsBodyItem } from '../profile-settings-body-item'
import cl from './ProfileSettingsBodyItems.module.scss'

const { Text } = Typography

export const ProfileSettingsBodyItems = () => {
    return (
        <div className={cl.root}>
            <Text
                className={cl.root__title}
                text="notifications"
            />
            <ProfileSettingsBodyItem
                title="issue_activity"
                description="send_email_issue"
                check
            />
            <ProfileSettingsBodyItem
                title="meeting_tracking"
                description="send_meeting_notifications"
            />
            <ProfileSettingsBodyItem
                title="new_messages"
                description="send_message_notifications"
            />
            <div className={cl.root__notifications}>
                <Checkbox checked />
                <Text text="dont_send" />
            </div>
        </div>
    )
}
