import { FuseNavigationModelInterface } from '../core/components/navigation/navigation.model';

export class FuseNavigationModel implements FuseNavigationModelInterface
{
    public model: any[];

    constructor()
    {
        this.model = [
            {
                'id'      : 'applications',
                'title'   : 'Applications',
                'translate': 'NAV.APPLICATIONS',
                'type'    : 'group',
                'children': [
                    {
                        'id'   : 'sample',
                        'title': 'Sample',
                        'translate': 'صفحه اصلی',
                        'type' : 'item',
                        'icon' : 'email',
                        'url'  : '/login/errors/error-500',
                        'badge': {
                            'title': 25,
                            'translate': 'NAV.SAMPLE.BADGE',
                            'bg'   : '#F44336',
                            'fg'   : '#FFFFFF'
                        }
                    }
                ]
            }
        ];
    }
}
