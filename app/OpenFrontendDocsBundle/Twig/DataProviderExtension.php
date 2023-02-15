<?php

namespace OpenFrontendDocsBundle\Twig;

use Sculpin\Core\DataProvider\DataProviderManager;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class DataProviderExtension extends AbstractExtension
{
    public function __construct(private DataProviderManager $dataProviderManager)
    {

    }

    public function getFunctions()
    {
        return [
            new TwigFunction('open_frontend_get_data_provider', [$this, 'getProvider'])
        ];
    }

    public function getProvider(string $name): array
    {
        return $this->dataProviderManager->dataProvider($name)->provideData();
    }
}