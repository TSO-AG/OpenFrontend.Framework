<?php

namespace OpenFrontendDocsBundle\Twig;

use Twig\Environment;
use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;

class HtmlExampleExtension extends AbstractExtension
{
    public function __construct(private Environment $twig)
    {

    }

    public function getFilters()
    {
        return [
            new TwigFilter('open_frontend_html_example', [$this, 'renderHtmlExample'], ['is_safe' => ['html']])
        ];
    }

    public function renderHtmlExample(string $body): string
    {
        return $this->twig->render('html_example.html.twig', ['html' => $body]);
    }
}